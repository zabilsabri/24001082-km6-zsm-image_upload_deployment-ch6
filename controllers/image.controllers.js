const { PrismaClient } = require('@prisma/client');
const response = require('../utils/response');
const imageKit = require('../utils/imagekit');
const path = require('path');
const imagekit = require('../utils/imagekit');
const getFileId = require('../utils/fileId');
const prisma = new PrismaClient();

module.exports = {
    postImage: async(req, res, next) => {
        try {
            
            let { judul, deskripsi } = req.body;
            let strFile = req.file.buffer.toString('base64');

            let { url } = await imageKit.upload({
                fileName: Date.now() + path.extname(req.file.originalname),
                file: strFile
            });

            const image = await prisma.image.create({
                data: {
                    judul: judul,
                    deskripsi: deskripsi,
                    image_url: url
                }
            })

            res.status(201).json({
                status: 'success',
                data: {
                    judul: image.judul,
                    deskripsi: image.deskripsi,
                    image_url: image.url
                }
            });

        } catch (error) {
            res.status(400).json(response('error', error.message));
        }
    },

    getAllImage: async(req, res, next) => {

        try {

            const images = await prisma.image.findMany();
            res.status(200).json(response('success', images));
        
        }
         catch (error) {
            res.status(500).json(response('error', error.message));
        }

    },

    getImage: async(req, res, next) => {
        try {
            
            const id = parseInt(req.params.id);

            const exist = await prisma.image.findUnique({
                where: {
                    id: id
                }
            })

            if(!exist){
                res.status(404).json(response('error', error.message));
            }

            const image = await prisma.image.findUnique({
                where: {
                    id: id
                }
            });

            res.status(200).json({
                status: 'success',
                data: {
                    judul: image.judul,
                    deskripsi: image.deskripsi,
                    image_url: image.image_url
                }
            });

        } catch (error) {
            res.status(500).json(response('error', error.message));
        }
    },

    deleteImage: async(req, res, next) => {

        try {
            
            const id = parseInt(req.params.id);

            const image = await prisma.image.findUnique({
                where: {
                    id: id
                }
            });

            if(!image){
                res.status(404).json(response('error', error.message));
            }

            const filename = image.image_url.substring(image.image_url.lastIndexOf('/') + 1);
            const fileId = await getFileId(filename);

            await imagekit.deleteFile(fileId);

            await prisma.image.delete({
                where: {
                    id: id
                }
            });

            res.status(200).json(response('success', 'Image has been deleted'));

        } catch (error) {
            res.status(500).json(response('error', error.message));
        }
        
    },

    editImage: async(req, res, next) => {
            
            try {
                
                const id = parseInt(req.params.id);
                const { judul, deskripsi } = req.body;
    
                const image = await prisma.image.findUnique({
                    where: {
                        id: id
                    }
                });
    
                if(!image){
                    res.status(404).json(response('error', error.message));
                }
    
                const updatedImage = await prisma.image.update({
                    where: {
                        id: id
                    },
                    data: {
                        judul: judul,
                        deskripsi: deskripsi
                    }
                });
    
                res.status(200).json(response('success', updatedImage));
    
            } catch (error) {
                res.status(500).json(response('error', error.message));
            }
    
        }

}
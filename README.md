# API List

List API Image CRUD dengan menggunakan ImageKit

## Image CRUD With ImageKit

### 1. Get All Data/Image
- **Description:** Endpoint ini berguna untuk mengambil semua gambar dan detail yang telah diupload sebelumnya.
- **Endpoint:** `https://expressjs-prod-576e.up.railway.app/api/v1/images`
- **Methods:** GET

### 2. Get Specific Data/Image
- **Description:** Endpoint ini berguna untuk mengambil gambar beserta detailnya, secara spesifik menggunakan id pada database.
- **Endpoint:** `https://expressjs-prod-576e.up.railway.app/api/v1/image/:id`
- **Methods:** GET

### 3. Post Image With Detail
- **Description:** Endpoint ini berguna untuk mengupload gambar beserta detailnya.
- **Endpoint:** `https://expressjs-prod-576e.up.railway.app/api/v1/image`
- **Methods:** POST
- **Format:** Form-Data
- **Parameter:** `judul`, `deskripsi`, `image_url`

### 4. Edit Image's Detail
- **Description:** Endpoint ini berguna untuk mengedit detail gambar.
- **Endpoint:** `https://expressjs-prod-576e.up.railway.app/api/v1/image/e/:id`
- **Methods:** PUT
- **Format:** JSON
- **Parameter:** `judul`, `deskripsi`

### 5. Delete Image In DB & ImageKit.io
- **Description:** Endpoint ini berguna untuk menghapus gambar dari database dan imagekit.io.
- **Endpoint:** `https://expressjs-prod-576e.up.railway.app/api/v1/image/d/:id`
- **Methods:** DELETE

---

Silahkan test semua Endpoint API yang tersedia, berdasarkan dari dokumentasi di atas!

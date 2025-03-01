# Degit - Clone Repository Without Git History

`degit` adalah alat yang memungkinkan Anda mengunduh template dari repository GitHub (atau GitLab, Bitbucket) tanpa menyertakan riwayat Git. Ini sangat berguna untuk membuat proyek baru dari template tanpa membawa seluruh commit history.

## 📌 Instalasi

Anda bisa menggunakan `degit` secara langsung dengan `npx`, atau menginstalnya secara global:

```sh
# Menggunakan npx (tanpa instalasi global)
npx degit username/repository my-project

# Atau install secara global
npm install -g degit
```

## 🚀 Penggunaan

### Clone repository tanpa git history:

```sh
degit username/repository my-project
```

Contoh:

```sh
degit vercel/next.js my-next-app
```

Ini akan membuat folder `my-next-app` berisi kode dari repository tanpa `.git`.

### Clone branch tertentu:

```sh
degit username/repository#branch-name my-project
```

Contoh:

```sh
degit vercel/next.js#canary my-next-app
```

### Gunakan dengan GitLab atau Bitbucket:

- **GitHub**: `degit username/repository`
- **GitLab**: `degit gitlab:username/repository`
- **Bitbucket**: `degit bitbucket:username/repository`

### Menggunakan degit dalam skrip

Jika Anda ingin menggunakannya dalam skrip:

```sh
npx degit username/repository my-folder && cd my-folder && npm install
```

## 🔥 Kelebihan `degit`

✅ Tidak membawa riwayat Git (`.git`)
✅ Lebih cepat dibanding `git clone`
✅ Bisa digunakan untuk berbagai layanan Git (GitHub, GitLab, Bitbucket)
✅ Cocok untuk memulai proyek dari template

---

**Contoh Penggunaan Nyata**

Jika Anda ingin membuat proyek baru dari template Next.js tanpa riwayat Git:

```sh
degit vercel/next.js my-next-app
cd my-next-app
npm install
npm run dev
```

Selamat mencoba! 🚀

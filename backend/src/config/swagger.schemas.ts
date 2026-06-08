/**
 * @swagger
 * components:
 *   schemas:
 *
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *           example: John Doe
 *         email:
 *           type: string
 *           format: email
 *           example: john@example.com
 *         role:
 *           type: string
 *           example: admin
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     CreateUserDto:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - role
 *       properties:
 *         name:
 *           type: string
 *           example: John Doe
 *         email:
 *           type: string
 *           format: email
 *           example: john@example.com
 *         password:
 *           type: string
 *           example: secret123
 *         role:
 *           type: string
 *           example: admin
 *
 *     UpdateUserDto:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         role:
 *           type: string
 *
 *     Supplier:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         supplierCode:
 *           type: string
 *           example: SUP-001
 *         name:
 *           type: string
 *           example: PT Sumber Makmur
 *         phone:
 *           type: string
 *           example: "081234567890"
 *         email:
 *           type: string
 *           format: email
 *         address:
 *           type: string
 *         isActive:
 *           type: boolean
 *
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         sku:
 *           type: string
 *           example: PRD-001
 *         name:
 *           type: string
 *           example: Laptop ASUS
 *         unit:
 *           type: string
 *           example: pcs
 *         purchasePrice:
 *           type: number
 *           example: 5000000
 *         sellingPrice:
 *           type: number
 *           example: 6500000
 *         minimumStock:
 *           type: integer
 *           example: 5
 *
 *     LoginDto:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: admin@example.com
 *         password:
 *           type: string
 *           example: secret123
 *
 *     AuthResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIs...
 *         user:
 *           $ref: '#/components/schemas/User'
 */

// File ini hanya berisi JSDoc untuk Swagger schemas.
// Tidak ada kode yang dieksekusi.
export {};

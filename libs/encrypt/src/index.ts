import { Buffer } from 'buffer'
import * as crypto from 'crypto'

interface EncryptedData {
  iv: string
  data: string
}

export class AES256CBC {
  private readonly encryptionKey: Buffer
  private readonly ALGORITHM = 'aes-256-cbc'

  constructor(key: string) {
    // Ensure the key is 32 bytes long
    const keyBuffer = Buffer.from(key, 'hex')
    if (keyBuffer.length !== 32) {
      throw new Error('Invalid key length. Key must be 32 bytes long.')
    }
    this.encryptionKey = keyBuffer
  }

  public encrypt(text: string): EncryptedData {
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipheriv(this.ALGORITHM, this.encryptionKey, iv)

    let enc = cipher.update(text, 'utf8', 'hex')
    enc += cipher.final('hex')

    return {
      iv: iv.toString('hex'),
      data: enc,
    }
  }

  public decrypt(encryptedData: EncryptedData): string {
    const decipher = crypto.createDecipheriv(
      this.ALGORITHM,
      this.encryptionKey,
      Buffer.from(encryptedData.iv, 'hex'),
    )

    let str = decipher.update(encryptedData.data, 'hex', 'utf8')
    str += decipher.final('utf8')

    return str
  }
}

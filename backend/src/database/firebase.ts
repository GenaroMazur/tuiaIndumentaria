import { initializeApp } from "firebase-admin/app"
import { refreshToken } from "firebase-admin/lib/app/credential-factory"

export const conectFirebase =(URL:string,CREDENTIALSDB:string) => {
    initializeApp({
        "credential":refreshToken(CREDENTIALSDB),
        "databaseURL":URL
    })
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online')
}
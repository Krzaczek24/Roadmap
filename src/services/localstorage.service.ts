import { Injectable } from "@angular/core"

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    public setItem<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value))
    }

    public getItem<T>(key: string): T | null {
        const stringifiedValue = localStorage.getItem(key)
        if (stringifiedValue)
            return JSON.parse(stringifiedValue)
        return null
    }

    public removeItem(key: string): void {
        localStorage.removeItem(key)
    }

    public clear(): void {
        localStorage.clear()
    }
}
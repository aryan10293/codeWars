export class Kata {
    static getCount(str: string): number {
        let num: number = 0
        const lowercaseVowels: string[] = ['a', 'e', 'i', 'o', 'u'];
        for (let i: number = 0; i < str.length; i++) {
            if (lowercaseVowels.includes(str[i])) num++
        }
        // your code here
        return num
    }
}
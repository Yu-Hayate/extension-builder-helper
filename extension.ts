const DataToName: any[] = []
const Names: String[] = []
let index = 0
let RNGseed = 1374
let factor: number = 0
let hexString: string = "0123456789ABCDEF";
let hexResult: string = "";
let out = null
settings.writeNumber("StartRunTime", settings.readNumber("TotalRunTime"))
let TotalRunTimeNum = 0

const NumList = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000, 4000, 5000, 9000, 10000, 40000, 50000, 90000, 100000, 400000, 500000, 900000, 1000000, 4000000, 5000000, 9000000, 10000000, 40000000, 50000000, 90000000, 1000000000, 4000000000, 5000000000, 9000000000, 10000000000];
const NumeralsList = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M", "MV̅", "V̅", "MX̅", "X̅", "X̅L̅", "L̅", "X̅C̅", "C̅", "C̅D̅", "D̅", "C̅M̅", "M̅", "M̅V̿", "V̿", "M̅X̅̅", "X̅̅", "X̅̅L̅̅", "L̅̅", "X̅̅C̅̅", "C̅̅", "C̅̅V̿̅", "V̿̅", "C̅̅X̿̅", "X̿̅"];

function getSimilarity(word: string, search: string): number {
    let similarity = word.toLowerCase().includes(search.toLowerCase()) ? 0 : word.toLowerCase().compare(search.toLowerCase());
    return similarity;
}

function roundToDecimals(num: number, decimalPlaces: number) {
    factor = 10 ** decimalPlaces
    return Math.round(num * factor) / factor
}
function findBiggestSubtraction(Num: number) {
    let maxSubtraction = 0 - Infinity;
    for (let i = 0; i < NumList.length; i++)
        if (Num - NumList[i] + 1 > 0)
            maxSubtraction = NumList[i];
    return maxSubtraction;
}



namespace help {
game.onUpdate(function () {
    TotalRunTimeNum = game.runtime() + settings.readNumber("StartRunTime");
    settings.writeNumber("TotalRunTime", TotalRunTimeNum);
})
    //% block
    export function ReportError(error: String) {
        throw("Error: " + error)
    }
    //% block
    export function AttachDataToName(Name: String, info: any) {
        index = Names.indexOf(Name)
        if (index == -1) {
            DataToName.push(info)
            Names.push(Name)
        } else {
            throw("the name \"" + Name + "\" is alredy in use")
        }
    }
    //% block
    export function GetDataFromName(Name: String) {
        index = Names.indexOf(Name)
        if (index != -1) {
            return DataToName[index]
        } else {
            throw("the name \"" + Name + "\" does not exist")
        }
    }
    //% block
    export function NumberToHexadecimal(Value: number): string {

        hexResult = "";
        while (Value > 0) {
            let remainder: number = Value % 16;
            hexResult = hexString.charAt(remainder) + hexResult;
            Value = Math.floor(Value / 16);
        }

        if (hexResult.length < 2) {
            hexResult = "0" + hexResult;
        }

        return hexResult;
    }
    //% block
    export function TotalRunTime() {
        return TotalRunTimeNum
    }
    //% block
    export function NumberToBinary(Value: number): string {
        let binary = "";
        while (Value > 0) {
            binary = (Value % 2) + binary;
            Value = Math.floor(Value / 2);
        }
        return binary;
    }
    //% block
    export function NumberToRomanNumerals(Value: number) {
        let String2 = "";
        while (Value != 0) {
            const Sub = findBiggestSubtraction(Value);
            String2 += NumeralsList[NumList.indexOf(Sub)];
            Value -= Sub; 
        }
        return String2;
    }
    //% block
    export function roundToDecimalPoint(Value: number, DecimalsPoints: number) {
        let factor = 10 ** DecimalsPoints
        return Math.round(Value * factor) / factor
    }
    //% block
    export function abbreviateNumber(Value: number) {
        if (Value >= 1000) {
            let numlist = [
                ["K", "1000"],
                ["M", "1000000"],
                ["B", "1000000000"],
                ["T", "1000000000000"],
                ["Qa", "1000000000000000"],
                ["Qi", "1000000000000000000"],
                ["Sx", "1e+21"],
                ["Sp", "1e+24"],
                ["Oc", "1e+27"],
                ["No", "1e+30"],
                ["Dc", "1e+33"],
                ["Ud", "1e+36"],
                ["Dd", "1e+39"],
                ["Td", "1e+42"],
                ["Qad", "1e+45"],
                ["Qid", "1e+48"],
                ["Sxd", "1e+51"],
                ["Spd", "1e+54"],
                ["Ocd", "1e+57"],
                ["Nod", "1e+60"],
                ["Vg", "1e+63"],
                ["Xg", "1e+66"],
                ["Pg", "1e+69"],
                ["Ng", "1e+72"],
                ["Gg", "1e+75"],
                ["Eg", "1e+78"],
                ["Zg", "1e+81"],
                ["Yg", "1e+84"],
                ["Rg", "1e+87"],
                ["Ag", "1e+90"],
                ["Bg", "1e+93"],
                ["Cg", "1e+96"],
                ["Dg", "1e+99"],
                ["Tg", "1e+102"],
                ["Qag", "1e+105"],
                ["Qig", "1e+108"],
                ["Sxg", "1e+111"],
                ["Spg", "1e+114"],
                ["Ocg", "1e+117"],
                ["Nog", "1e+120"],
                ["Vgg", "1e+123"],
                ["Xgg", "1e+126"],
                ["Pgg", "1e+129"],
                ["Ngg", "1e+132"],
                ["Ggg", "1e+135"],
                ["Egg", "1e+138"],
                ["Zgg", "1e+141"],
                ["Ygg", "1e+144"],
                ["Rgg", "1e+147"],
                ["Agg", "1e+150"],
                ["Bgg", "1e+153"],
                ["Cgg", "1e+156"],
                ["Dgg", "1e+159"],
                ["Tgg", "1e+162"],
                ["Qagg", "1e+165"],
                ["Qigg", "1e+168"],
                ["Sxgg", "1e+171"],
                ["Spgg", "1e+174"],
                ["Ocgg", "1e+177"],
                ["Nogg", "1e+180"],
                ["Vggg", "1e+183"],
                ["Xggg", "1e+186"],
                ["Pggg", "1e+189"],
                ["Nggg", "1e+192"],
                ["Gggg", "1e+195"],
                ["Eggg", "1e+198"],
                ["Zggg", "1e+201"],
                ["Yggg", "1e+204"],
                ["Rggg", "1e+207"],
                ["Aggg", "1e+210"],
                ["Bggg", "1e+213"],
                ["Cggg", "1e+216"],
                ["Dggg", "1e+219"],
                ["Tggg", "1e+222"],
                ["Qaggg", "1e+225"],
                ["Qiggg", "1e+228"],
                ["Sxggg", "1e+231"],
                ["Spggg", "1e+234"],
                ["Ocggg", "1e+237"],
                ["Noggg", "1e+240"],
                ["Vgggg", "1e+243"],
                ["Xgggg", "1e+246"],
                ["Pgggg", "1e+249"],
                ["Ngggg", "1e+252"],
                ["Ggggg", "1e+255"],
                ["Egggg", "1e+258"],
                ["Zgggg", "1e+261"],
                ["Ygggg", "1e+264"],
                ["Rgggg", "1e+267"],
                ["Agggg", "1e+270"],
                ["Bgggg", "1e+273"],
                ["Cgggg", "1e+276"],
                ["Dgggg", "1e+279"],
                ["Tgggg", "1e+282"],
                ["Qagggg", "1e+285"],
                ["Qigggg", "1e+288"],
                ["Sxgggg", "1e+291"],
                ["Spgggg", "1e+294"],
                ["Ocgggg", "1e+297"],
                ["Nogggg", "1e+300"],
            ]
            let Position = Math.floor((convertToText(Value).length - 1) / 3) - 1
            let abbr = "" + convertToText(roundToDecimals(Value / parseFloat(numlist[Position][1]), 2)) + numlist[Position][0]
            return abbr
        } else {
            return Value
        }
    }
    /**
    * Converts an array into a string that can be read by another function
    * @param Array The input array
    * @returns The converted string
    */
    //% block
    export function convertArrayToString(Array: any[]): string {
        return JSON.stringify(Array);
    }
    /**
     * Converts a string back into a list (array)
     * @param String The input string
     * @returns The converted list (array)
     */
    //% block
    export function convertStringToArray(String: string): any[] {
        return JSON.parse(String);
    }
    //% block=""
    export function GetFibonacciNumberAtIndex(index: number): number {
        let a = 0;
        let b = 1;

        if (index === 0) {
            return a;
        } else if (index === 1) {
            return b;
        }

        for (let i = 2; i <= index; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }

        return b;
    }
    //% block
    export function TimeInMSToTime(input: number): string {
        // Calculate the time values in seconds, minutes, hours, days, and years
        let seconds = Math.floor(input / 1000) % 60;
        let minutes = Math.floor(input / (1000 * 60)) % 60;
        let hours = Math.floor(input / (1000 * 60 * 60)) % 24;
        let days = Math.floor(input / (1000 * 60 * 60 * 24)) % 365;
        let years = Math.floor(input / (1000 * 60 * 60 * 24 * 365));

        // Create the formatted time string
        let timeString = '';
        if (years > 0) {
            timeString += years.toString() + 'y:';
        }
        if (days > 0) {
            timeString += days.toString() + 'd:';
        }
        if (hours > 0) {
            timeString += hours.toString() + 'h:';
        }
        if (minutes > 0) {
            timeString += minutes.toString() + 'm:';
        }
        timeString += seconds.toString() + 's';

        return timeString;
    }
    //% block
    export function RNGsetSeed(seed: number) {
        RNGseed = seed % 10 ** 64
    }
    //% block
    export function RNGRandom() {
        RNGseed += 1 + Math.tan((RNGseed * 1.23456787654) ** 2)
        RNGseed = RNGseed % 10 ** 32
        out = (Math.sin(RNGseed * 2.4 + (RNGseed + 1.23 * Math.PI / 3)) + 1) / 2
        return out
    }
    //% block
    export function RNGRandomInt(min: number, max: number) {
        let range = max - min
        out = min + help.RNGRandom() * range
        return out
    }
    //% block
    export function shuffleArray(arr: any[]) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];

            if (Array.isArray(arr[i])) {
                shuffleArray(arr[i]);
            }

            if (Array.isArray(arr[j])) {
                shuffleArray(arr[j]);
            }
        }
    }

    //% block
    export function SherchStringArray(list: string[], search: string): string[] {
        let similarWords: string[] = [];

        for (let word of list) {
            let similarity = getSimilarity(word, search);
            if (similarity >= 0 && similarity <= 2) {
                similarWords.push(word);
            }
        }

        similarWords.sort((a, b) => {
            let similarityA = getSimilarity(a, search);
            let similarityB = getSimilarity(b, search);
            return similarityA - similarityB;
        });

        return similarWords;
    }

}
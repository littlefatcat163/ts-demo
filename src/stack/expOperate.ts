import Stack from './index';

function getOpeLev(ope: string) {
    if (/^[\*\/]$/.test(ope)) {
        return 1;
    }
    return 0;
}

function compareOpe(ope1: string, ope2: string) {
    return getOpeLev(ope1) > getOpeLev(ope2);
}

function count(ope: string, num1: number, num2: number) {
    switch (ope) {
        case '*':
            return num2 * num1;
        case '/':
            return num2 / num1;
        case '+':
            return num2 + num1;
        case '-':
            return num2 - num1;
        default:
            throw new Error('未识别的运算符: ' + ope);
    }
}
/**
 * @description 表达式运算
 */
export default function expOperate(exp: string) {
    const numStack: Stack = new Stack();
    const opeStack: Stack = new Stack();
    const expLength: number = exp.length;
    let str = exp;
    let index = 0;
    let res = 0;
    while (!!str) {
        if (/^\d/.test(str)) {
            const numStr = str.match(/^\d+/)?.[0] as string;
            index += numStr.length;
            numStack.push(+numStr);
            if (index === expLength) {
                while (opeStack.length > 0) {
                    let ope = opeStack.pop() as string;
                    if (opeStack.length > 0 && ope === '-' && opeStack.peek() === '-') {
                        ope = '+';
                    }
                    numStack.push(
                        count(
                            ope,
                            numStack.pop() as number,
                            numStack.pop() as number
                        )
                    );
                }
                res = numStack.pop() as number;
            }
        } else if (/^[\+\-\*\/]/.test(str)) {
            const opeStr = str.match(/^[\+\-\*\/]+/)?.[0] as string;
            index += opeStr.length;
            let lastOpe!: string;
            if (!!opeStack.length) {
                lastOpe = opeStack.peek() as string;
            }
            // 存在符号，对比前一个符号的级别，同级先计算前两个数值的结果
            if (!!lastOpe && !compareOpe(opeStr, lastOpe)) {
                lastOpe = opeStack.pop() as string;
                if (!!opeStack.length && lastOpe === '-' && opeStack.peek() === '-') {
                    lastOpe = '+';
                }
                const num1 = numStack.pop() as number;
                const num2 = numStack.pop() as number;
                numStack.push(count(lastOpe, num1, num2));
            }
            opeStack.push(opeStr);
        } else {
            throw new Error('表达式有误: ' + str);
        }
        str = exp.substring(index);
    }
    return res;
}

/**
 * @description 将算术表达式式转为计算用的栈
 * @param {string} exp 算术表达式
 */
export function trsExp(exp: string) {
    const numStack: Stack = new Stack();
    const opeStack: Stack = new Stack();
    let str = exp;
    let index = 0;
    while (!!str) {
        // (开头
        if (/^\(/.test(str)) {
            const startK = str.match(/^\(/)?.[0] as string;
            opeStack.push(startK);
            index ++;
        } else if (/^\)/.test(str)) {
            const ope = opeStack.pop();
            numStack.push(ope);
            // ()成对了，出栈
            opeStack.pop();
            index ++;
        } else if (/^\d/.test(str)) {
            const num = str.match(/^\d+/)?.[0] as string;
            numStack.push(num);
            index += num.length;
        } else if (/^[\+\-\*\/]/.test(str)) {
            const ope = str.match(/^[\+\-\*\/]/)?.[0] as string;
            let lastOpe!: string;
            if (!!opeStack.length) {
                lastOpe = opeStack.peek() as string;
            }
            if (/^[\+\-\*\/]/.test(lastOpe) && !compareOpe(ope, lastOpe)) {
                lastOpe = opeStack.pop() as string;
                numStack.push(lastOpe);
            }
            opeStack.push(ope);
            index += ope.length;
        }
        str = exp.substring(index);
    }
    while(!!opeStack.length) {
        numStack.push(opeStack.pop());
    }
    const list = [];
    while (!!numStack.length) {
        list.push(numStack.pop());
    }
    return list.reverse().join(' ');
}
import os from 'os'
export default function welcome() {
    console.log("Привет, юзер. Вижу ты зашел с " + os.type())
}

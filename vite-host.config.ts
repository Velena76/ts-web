import { defineConfig } from "vite";

export default defineConfig({
    root: '.',
    server: {
        /** `hot reload`, реагировать на изменения в коде или нет */
        hmr: true,
        /** открывать браузер сразу при запуске или нет */
        open: true,
        port: 3001,
    },
    esbuild: {
        /** указываем, что файлы .ts компилируются как TypeScript */
        loader: 'ts',
        /** версия спецификации в который будет компиляция ts */
        target: 'esnext',
    },
})
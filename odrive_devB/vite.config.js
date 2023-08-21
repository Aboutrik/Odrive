import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

 
export default defineConfig({
    plugins: [
        laravel(['resources/js/app.jsx']),
        react(),
        reactRefresh()
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});
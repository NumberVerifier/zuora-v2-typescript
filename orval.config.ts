import {defineConfig} from 'orval';


export default defineConfig({
    zuorav2: {
        output: {
            client: 'axios',
            mode: 'single',
            target: './zuoraV2.ts',
            workspace: './src/zuoraV2',
            schemas: './api',
            clean: true,
            indexFiles: true,
            override: {
                useDates: true,
                useNativeEnums: true,
                mutator: {
                    path: '../custom-instance.ts',
                    name: 'customInstance',
                },
            },
        },
        input: {
            target: './src/swaggerv2API.yaml',
            // target: './petstore.yaml'
        },
    },
});

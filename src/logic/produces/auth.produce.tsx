import { produce } from 'immer';

const loginProduce = (username: string, pass: string) => produce((state: any) => {
    state.user = null
});

export default {
    loginProduce
}
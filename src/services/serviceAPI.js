import {URL_BEFORE} from '../config';
import {URL_STOCK} from '../config';
import {URL_SALE} from '../config';

// préparations
        async function findAll(){
            const res = await fetch(URL_BEFORE, {
                method: "GET",
                headers: {
                    Accept: "Application/json",
                },
            });
            return await res.json();
            }

        async function findOne(id) {
            const res = await fetch(`${URL_BEFORE}/${id}`);
            return await res.json();
        } 

// Stock
async function findAllStock() {
    const res = await fetch(URL_STOCK, {
        method: "GET",
        headers: {
            Accept: "Application/json",
        },
    });
    return await res.json();
    }    

    async function findOneStock(id) {
        const res = await fetch(`${URL_STOCK}/${id}`);
        return await res.json();
    } 

// Vente
async function findAllSale(){
        const res = await fetch(URL_SALE, {
        method: "GET",
        headers: {
            Accept: "Application/json",
        },
    });
    return await res.json();
        }

    async function findOneSale(id) {
        const res = await fetch(`${URL_SALE}/${id}`);
        return await res.json();
    } 
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    findAll,
    findOne,
    findAllStock,
    findOneStock,
    findAllSale,
    findOneSale,
};
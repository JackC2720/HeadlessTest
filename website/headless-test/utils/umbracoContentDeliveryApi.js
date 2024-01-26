import {getConfig} from './configManager';
const config = getConfig();

const callContentDeliveryAPI = async (url) => {

    let items;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'api-key': config.apiKey,
                'preview': config.previewEnabled,
          }});
        console.log(response);
        items = response.json();
        console.log(items);

        } catch (e) {
            console.log(e)
        }

      return items;
}

export async function fetchItems(
    {expand = null,
    filter = null,
    skip = null, //Not implemented but saw an example of this for pagination. 
    take = null}) {

    let url = `${config.domain}/umbraco/delivery/api/v1/content/?`;
    url = addExpand(url, expand);
    url = addFilter(url, filter);

    return callContentDeliveryAPI(url);
}

export async function fetchItem(pathOrId, expand) {

    let url = `${config.domain}/umbraco/delivery/api/v1/content/item/${pathOrId}?`;
    url = addExpand(url, expand);

    return callContentDeliveryAPI(url);
}


const addExpand = (url, expand) => {
    if(expand){
        return `${url}expand=property:${expand}&`;
    }
    return url;
}
const addFilter = (url, filter) => {
    if(filter){
        return `${url}filter=contentType:${filter}&`;
    }
    return url;
}

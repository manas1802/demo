 import {format} from 'date-fns'

 function getMonthAbbreviation(monthIndex) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[monthIndex];
  }
 
 export const COLUMNS=[
    {
        Header:'ID',
        Footer:'ID',
        accessor:'id',
    },
    {
        Header:'Name',
        Footer:'Name',
        accessor:'name',
    },
    {
        Header:'Category',
        Footer:'Category',
        accessor:'category',
    },
    {
        Header:'Subcategory',
        Footer:'Subcategory',
        accessor:'subcategory',
    },
    {
        Header:'Created At',
        Footer:'Created At',
        accessor:'createdAt',
        Cell:({value})=>{const dateObject = new Date(value);
            const formattedDate = `${dateObject.getDate()}-${getMonthAbbreviation(dateObject.getMonth())}-${dateObject.getFullYear()}`;
            return formattedDate;}
    },
    {
        Header:'Updated At',
        Footer:'Updated At',
        accessor:'updatedAt',
        Cell:({value})=>{const dateObject = new Date(value);
            const formattedDate = `${dateObject.getDate()}-${getMonthAbbreviation(dateObject.getMonth())}-${dateObject.getFullYear()}`;
            return formattedDate;}
    },
    {
        Header:'Price',
        Footer:'Price',
        accessor:'price',
    },
    {
        Header:'Sale Price',
        Footer:'Sale Price',
        accessor:'sale_price',
    }
]
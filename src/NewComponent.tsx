import React from 'react';

type NewComponentPropsType = {
    students: Array<StudentType>
}
type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

//         <table>
//         <tr>
//         <th>Month</th>
//     <th>Savings</th>
// </tr>
//     <tr>
//         <td>January</td>
//         <td>$100</td>
//     </tr>
//     <tr>
//         <td>February</td>
//         <td>$80</td>
//     </tr>
// </table>

    return (
        <>
            <ul>
                {props.students.map((el, index) => {
                    return (
                        <li key={el.id}>
                            {el.id}
                            <span key={el.id}>{el.name}</span>
                            <span key={el.id}>{el.age}</span>
                        </li>
                    )
                })}
            </ul>
            <tr>
                {topCars.map((el, index) => {
                    debugger
                    return (
                        <table>
                            <tr>
                                <th key={index}> {index+1}</th>
                                <th key={index}>{el.manufacturer}</th> --
                                <th key={index}>{el.model}</th>
                            </tr>
                        </table>
                    )
                })}
            </tr>
        </>
    );
}
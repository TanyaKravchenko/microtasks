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
                            <span>{el.name}</span>
                            <span>{el.age}</span>
                        </li>
                    )
                })}
            </ul>
            <table>
                {topCars.map((el, index) => {
                    return (
                        <tbody key={index}>
                        <tr>
                            <td> {index + 1}</td>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                        </tbody>
                    )
                })}
            </table>
        </>
    );
}
import { Section, Title } from './OrderResume.styles';
import { React, useState } from 'react';
import btnDelete from '../../assets/btnDelete.svg'
import { useState } from 'react';

const OrderResume = (props) => {
  //fazer o cálculo do botao de mais e menos
  const [amount, setAmount] = useState(1);

  return (
    <Section>
      <Title>Resumo da Lápide</Title>
      <p>Cova:{props.selectValue}</p>
      <ul>
        {props.orderItem.map((item)=> (
          <li key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <button>-</button>
            <p>{amount}</p>
            <button>+</button>
            <button onClick={() => props.onClick(item)}>
              <img src={btnDelete} alt='excluir item do pedido'/>
            </button>
          </li>
        ))}
        
      </ul>
      <h3>Total: R$</h3>
    </Section>
  )
}
  
export default OrderResume;
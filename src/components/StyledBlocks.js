import styled from 'styled-components';

export const Container = styled.div`
display: flex;
max-width: 1170px;
margin: 15px auto;
border: 1px solid #ccc;
font-family: Arial, Verdana, sans-serif;
background-color: rgba(0,0,0,0.01);
`;

export const Title = styled.div`
margin: 0 auto;
text-align: center;
margin-top: 30px;
font-size: 20px;
font-family: Tahoma, sans-serif;
font-weight: 600;
`;

export const Section = styled.div`
display: flex;
flex-direction: column;
padding: 30px;
`;

export const Item = styled.div`
display: block;
padding: 10px 0 15px 0;
`;

export const Image = styled.div`
margin: 10px;
max-width: 150px;
display: inline-block;
`;

export const Login = styled.a`
font-family: Arial, Verdana, sans-serif;
font-weight: 600;
padding-right: 10px;
color: green;
text-decoration: none;
`;
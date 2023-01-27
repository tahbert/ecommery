import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3 className="breadcrumb">
          <Link to="/">home</Link>
          {product && <Link to="/products">/ products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: var(--grey900);
  background: var(--tertiaryColor);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  a {
    color: var(--grey900);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: white;
  }
`;

export default PageHero;

import React from 'react';

import styled from 'styled-components';

//RouterDom
import { Link } from 'react-router-dom';

//Component
import CrewTabCard from './CrewTabCard';

const Container = styled.div`
    padding-top: 30px;

    .box {
        background-color: red;
    }

    .mainBene {
        font-size: 200px;
        max-height: 283px;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
          Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        padding: 0px;
        background-color: #636e72;
        color: #636e72;
    }
    input {
        width: 100%;
        margin-bottom: 3px;
    }
    .card {
        background-color: white;
        margin: 0 0 2rem;
        border: none;
        /* min-width: 255px; */
        box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
    }

    .cardWrapper{
        background-color: white;
        margin: 0 0 2rem;
        border: none;
        box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
    }

    .cardWrapper .card{
        background-color: white;
        margin: 0 0 2rem;
        border: none;
        box-shadow: none;
    }
    
    .right {
        height: 128px;
        text-align: center;
    }
    .mainBene img {
        /* background-color: #e9ecef; */
        height: 283px;
        border: none;
        padding: 0px 0px;
        border-radius: 0.25rem;
    }
    .main {
        max-height: 283px;
        background-color: #636e72;
        color: white;
    }
    .nav {
        /* display:flex; */
        flex-wrap: wrap;
        overflow: auto;
        overflow-y: hidden;
        weight: 825px;
        height: 128px;
        
    }
    .board {
        min-height: 285px;
    }
    .user-image {
        vertical-align: middle;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        flex-shrink: 0;
    }
    .board_title {
        border-bottom: 2px solid #9f9f9f;
        padding: 10px;
        font-weight:bold;
    }
    .post {
        border-bottom: 1px solid #bfbfbf;
        padding: 4.5px 10px;
    
        :last-child {
          border: none;
        }
    }
    .login {
        font-size: 12px;
        height: 187px;
        padding: 40px 20px;
        opacity: 0.8;
        /* vertical-align:center; */
    }
    .greeting {
        margin-bottom: 5px;
    }
    .loginCard {
        
        top:50%;
        width: 100%;
        margin-bottom: 5px;
    }
    .loginFooter {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        color: black;
    }
    
    .item {
        width: 80px;
        height: 100px;
        margin: 15px 0px 20px 20px;
        text-align: center;
        text-decoration: none;
    }
    .item_icon {
        padding: 10px;
        font-size: 32px;
        font-weight: 600;
    }
    
    .item_name {
        font-size: 14px;
        font-weight: 600;
    }
    
    .poster {
        background-color: #0984e3;
        text-align: center;
    }
    
    .mainSearch{
        text-align:center;
    }
`;

const StyledLink = styled(Link)`
    font-size:30px;
    font-weight:500;
    text-decoration: none;
        color: black;
        &:focus,
        &:hover,
        &:visited,
        &:link,
    &:active {
        text-decoration: none;
        color: black;
    }
    color: #f06060;

    :hover {
        color:#636e72;
    }
`;

class CrewTabBody extends React.Component {
    render() {
        return (
            <Container className='container'>
                <StyledLink to={`/classify/${this.props.parent.parent_route}`}>{this.props.parent.route_name}</StyledLink>
                <div className="row">
                    {this.props.shb_lists ? this.props.shb_lists.map((rows, index) => {
                        if (rows.shb_classify === this.props.parent.parent_route) {
                            return (
                                <CrewTabCard
                                    shb={rows}
                                />
                            );
                        }

                    }) : ""}
                </div>
            </Container>
        );
    }
}

export default CrewTabBody;
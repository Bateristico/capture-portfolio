import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions? <span>FAQ</span></h2>
            <Toggle>
                <div className="question">
                    <h4>How do I start?</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, tenetur harum vel commodi nemo nisi eaque laudantium delectus iusto fugiat?</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Toggle>
            <div className="question">
                <h4>Daily schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis culpa odit ullam ducimus eum aut eligendi excepturi, aliquid quas deleniti.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quibusdam cum assumenda veniam eos. Quia asperiores molestias provident nesciunt reprehenderit.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do you offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum repellat quaerat nostrum est quibusdam tempore iure aperiam dolor iusto consequatur.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;

    }
    h2 { 
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #CCCCCC;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;
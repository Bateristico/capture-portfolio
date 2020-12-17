import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How do I start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, tenetur harum vel commodi nemo nisi eaque laudantium delectus iusto fugiat?</p>
                    </div>
                </Toggle>
                <Toggle title="Daily schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis culpa odit ullam ducimus eum aut eligendi excepturi, aliquid quas deleniti.</p>
                    </div>          
                </Toggle>
                <Toggle title="Different Payment methods">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quibusdam cum assumenda veniam eos. Quia asperiores molestias provident nesciunt reprehenderit.</p>
                </div>
                </Toggle>
                <Toggle title="What products do you offer">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum repellat quaerat nostrum est quibusdam tempore iure aperiam dolor iusto consequatur.</p>
                </div>
                </Toggle>
            </AnimateSharedLayout>
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
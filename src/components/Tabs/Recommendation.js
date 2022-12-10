import React from 'react'
import styled from 'styled-components';
import { MediumText,H2} from '../styles/TextStyles';

export default function Recommendation() {
  return (
    <div>
          <FirstRow>
                    <div>
                        <Head>
                            Recommendation System
                        </Head>
                        <Info>
                        Netflix uses two different algorithms to build a recommendation system
                            <br/><br/>
                            1. Collaborative filtering: The idea of this filtering is that if two users have similar rating history then they will behave similarly in the future. For example, consider there are two-person. One person liked the movie and rated the movie with a good score. Now, there is a good chance that the other person will also have a similar pattern and he/she will do the same thing that the first person has done. 
                            <br/><br/>
                            2. Content-based filtering: The idea is to filter those videos which are similar to the video a user has liked before. Content-based filtering is highly dependent on the information from the products such as movie title, release year, actors, the genre. So to implement this filtering it’s important to know the information describing each item and some sort of user profile describing what the user likes is also desirable.  
                        </Info>
                    </div>
                    <div>
                            <Cardimage>
                            
                            </Cardimage>
                    </div>
                </FirstRow>

                <Cardimage2>

                </Cardimage2>
    </div>
  )
}


const Info=styled(MediumText)`
    margin: 1.5rem 3rem 0 8rem;
    text-align: left;
    font-size: 14px;
`
const Head=styled(H2)`
    margin: 3rem 3rem 0 8rem;
    text-align: left;
`

const FirstRow= styled.div`
    
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: normal;
        align-items: normal;
        align-content: normal;

    .flex-items:nth-child(1) {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
    }

    .flex-items:nth-child(2) {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
    }
`

const Cardimage=styled.div`

    width: 750px;
    height: 680px;
    background-image: url(${"/images/cards/ContentBasedFilteringArchitecture.png"});
`

const Cardimage2=styled.div`
align-items: center;
    margin:0 0 2rem 3rem;
    width:100%;
    height: 368px;
    background-repeat: no-repeat;
    background-image: url(${"/images/cards/collabarativearchi.png"});
`
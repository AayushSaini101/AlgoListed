import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CCHeader from '../Components/CCHeader'
import LeftMenu from '../Components/LeftMenu'
import FilterListIcon from '@material-ui/icons/FilterList';
import InfoIcon from '@material-ui/icons/Info';
import SimpleFooter from "../Components/SimpleFooter";

const Opportunities = () => {
    useEffect(() => {
      document.title = "All Internship and Job Opportunities - Algolisted";
    }, []);

    return (
        <GrandContainer>
            <MobContainer>
                We are still working on Responsive Version of the website, please view the site with 
                width more than 1100px, a standard laptop or tablet landscape. 
                <img src="https://media4.giphy.com/media/13FrpeVH09Zrb2/giphy.gif" alt="" />
            </MobContainer>
            <Container>
                <CCHeader />
                <LeftMenu marked={"opportunities"} />
                <div className='show-middle-content'>
                  <div className="cc-middle-content">
                      <h1 className='main-heading'>All Internship & Job Opportunities <div className="head-tag">coming soon</div> </h1>
                      <p className="heading-supporter">
                        On this page, you'll find details about various job openings and internship opportunities, along with the corresponding schedules. We are presently in the process of planning and will be unveiling this page shortly. To have your LinkedIn post showcased on this page, simply include the hashtag <div className="special-blue">#list_as_hiring_on_algolisted</div>
                      </p>
                      <div className="message">
                          <div className="icon"></div>
                          <div className="text">
                          Simply add the hashtag <b>#list_as_hiring_on_algolisted</b> to your LinkedIn post for it to be featured on this page.
                          </div> 
                      </div> 
                  </div>
                  <SimpleFooter></SimpleFooter>
                </div>
            </Container>
        </GrandContainer>
    )
}

export default Opportunities

const GrandContainer = styled.div`

`

const MobContainer = styled.div`
  width: 100vw;
  padding: 40px;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;

  img{
    width: calc(100% - 80px);
    margin: 40px;
    border-radius: 5px;
    display: block;
  }

  @media only screen and (min-width: 1099px){
    display: none;
  }
`


const Container = styled.div`
    @media only screen and (max-width: 1099px){
        display: none;
    }

    display: flex;
    justify-content: space-between;
    padding-left: 200px;

    a{
      color: #18489f;
    }

    .show-middle-content{
      margin-bottom: 30px;
    }

    .cc-middle-content{
      min-height: 100vh;
      width: 100%;
      /* padding: 80px min(120px, 5vw) 50px min(120px, 5vw); */
      padding: 80px 120px 30px 120px;
      position: relative;
      width: 100%;
      max-width: 1360px;
      min-width: 850px;
      margin: auto;
      
      @media only screen and (max-width: 1200px){
        padding: 80px 50px 30px 50px;
      }   

      .main-heading{
          font-size: 1.65rem;
          font-weight: 600;
          color: #292929;
          display: flex; 
          align-items: center;

          .head-tag{
            display: inline;
            font-size: 0.75rem;
            font-weight: 500;
            padding: 0.25rem 0.5rem;
            border-radius: 100px;
            background-color: #e5e5e5;
            margin-left: 10px;
          }
      }

      .heading-supporter{
          font-size: 1.05rem;
          margin-bottom: 10px;
          font-weight: 400;
          color: #696168;

          .special-blue{
            display: inline;
            color: cornflowerblue;
            font-weight: 500;
            margin-left: 0.25rem;
          }
          

          a{
            color: #18489f;
            font-size: 0.95rem;
            font-weight: 300;
            margin-left: 0.25rem;
          }
      }

      .message{
        display: inline-block;
        /* display: flex; */
        /* align-items: center; */
        background-color: #d5f7e1;
        border-radius: 5px;
        padding: 10px;
        margin: 20px 0 10px 0;

        .text{
            font-size: 0.8rem;
            color: #13803b;
            font-weight: 300;
            
            b{
              font-weight: 400;
            }
        }
      }
    }
`

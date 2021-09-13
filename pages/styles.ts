import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 100vh;
  /* background: url('/images/IMG_8226.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover; */

  .card {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border-radius: 14px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-card {
    overflow: hidden;
    width: 310px;
    height: 545px;
    margin-right: 15px;

    object-fit: cover;

    .img {
      height: 100%;
      object-fit: cover;
    }
  }

  .content-card {
    width: 490px;
    height: 545px;

    padding: 50px 65px 55px;

    background: #fff;
    color: #5c5d56;

    .date {
      font-family: 'Parisienne', cursive;
      font-family: 'Lora', serif;

      p {
        margin-bottom: 0;
      }
    }

    .divider {
      display: flex;
      align-items: center;
      justify-content: baseline;
      width: 100%;

      .line {
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #f0f0ee;
      }
    }
  }

  .counter-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .timer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;

    .timer {
      margin: 0;
      font-size: 45px;
      font-weight: 600;
      font-family: 'Oswald', sans-serif;
      line-height: 1;
    }

    .unit {
      font-size: 12px;
      font-family: 'Lora', serif;
    }

    span {
      display: block;
    }
  }

  .pictures {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .picture-container {
      overflow: hidden;

      width: 110px;
      height: 110px;
      object-fit: cover;

      border-radius: 5px;

      transition: transform 0.3s;

      &:hover {
        transform: translateY(-5px);
      }

      .picture {
        width: 100%;
      }
    }
  }
`;

import styled from 'styled-components'

export const MapWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 650%;
  width: 100%;
  padding: 25px 50px 75px 100px;
`
export const MarkerWrapper = styled.div`
  height: 50px;
  width: 200px;
`
export const Icon = styled.img`
  height: 20px;
  width: 20px;
`

export const Text = styled.div`
  word-wrap: nowrap;
  width: auto;
  height: auto;
  display: inline-block;
  padding: 8px;
  font-weight: bold;
  border-radius: 8px;
  border: 1.5px solid orange;
  background-color: white;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    background-color: wheat;
  }
`


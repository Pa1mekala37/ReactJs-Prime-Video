import styled from 'styled-components'

export const MovieItemContainer = styled.div``

export const Thumbnail = styled.img`
  width: 215px;
  height: 150px;
  border-radius: 8px;
  cursor: pointer;
  @media (min-width: 1200px) {
    width: 254px;
    height: 170px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 28px;
  height: 28px;
  border: none;
  margin-top: 18px;
  margin-right: 18px;
  outline: none;
  cursor: pointer;
`

export const MoviePlayerContainer = styled.div`
  margin-top: 12px;
  margin-left: 48px;
  margin-bottom: 48px;
  margin-right: 48px;
`

import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor=''>Vou trabalhar em</label>
          <input type='text' id='task' name='task' />

          <label htmlFor=''>Durante</label>
          <input type='number' id='duration' name='duration' />

          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type='submit'>
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}

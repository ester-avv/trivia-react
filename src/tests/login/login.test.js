import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from '../helpers/renderWithRouterAndRedux';
import App from '../../App';

describe('Realiza testes na tela de login', () => {
  it('Verifica se existem os campos de email e nome do usuario', () => {
    renderWithRouterAndRedux(<App />)
    const email = screen.getByTestId('input-gravatar-email')
    const name = screen.getByTestId('input-player-name');
    expect(email).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  })
  it('Verifica se botao está desabilidado caso não seja digitado email corretamente e o nome esteja vazio', () => {
    renderWithRouterAndRedux(<App />)
    const email = screen.getByTestId('input-gravatar-email')
    const name = screen.getByTestId('input-player-name');
    const btnPlay = screen.getByTestId('btn-play');
    userEvent.type(email, 'teste.joca.com')
    userEvent.type(name, '')
    expect(btnPlay).toBeDisabled();
  })
  it('Verifica se botao está habilidado caso seja digitado email corretamente e o nome esteja preenchido', () => {
    renderWithRouterAndRedux(<App />)
    const email = screen.getByTestId('input-gravatar-email')
    const name = screen.getByTestId('input-player-name');
    const btnPlay = screen.getByTestId('btn-play');
    userEvent.type(email, 'teste@joca.com')
    userEvent.type(name, 'joca')
    expect(btnPlay).toBeEnabled();
  })
  it('Ao clicar no botao habilitado, a pagina de game é renderizada', () => {
    const { history } = renderWithRouterAndRedux(<App />)
    const email = screen.getByTestId('input-gravatar-email')
    const name = screen.getByTestId('input-player-name');
    const btnPlay = screen.getByTestId('btn-play');

    userEvent.type(email, 'tryber@teste.com')
    userEvent.type(name, 'joca')
    userEvent.click(btnPlay);
    
    expect(history.location.pathname).toBe('/game');
    console.log(history.location)
  })
  it('Verifica se a chamada a API é realizada', () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        response_code:0,
        response_message:'Token Generated Successfully!',
        token:"7661c44218be07bd76c3e82e5a622f02b7b6aa8a022148623884b1142a0ab0a8",
      })
    })
    renderWithRouterAndRedux(<App />)
    const email = screen.getByTestId('input-gravatar-email')
    const name = screen.getByTestId('input-player-name');
    const btnPlay = screen.getByTestId('btn-play');

    userEvent.type(email, 'tryber@teste.com')
    userEvent.type(name, 'joca')
    userEvent.click(btnPlay);
    expect(global.fetch).toBeCalledTimes(1);
  })
  it('Verifica se ao clicar no botao de configurações, a pagina de configurações é renderizada', () => {
    const { history } = renderWithRouterAndRedux(<App />)
    const btnSettings = screen.getByTestId('btn-settings');
    expect(btnSettings).toBeInTheDocument();
    userEvent.click(btnSettings);
    expect(history.location.pathname).toBe('/configuracoes')
  })
})
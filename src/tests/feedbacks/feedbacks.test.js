import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from '../helpers/renderWithRouterAndRedux';
import App from '../../App';

describe('Realiza testes da tela de Feedbacks', () => {
  it('Verifica se existe a imagem de perfil do usuário', async () => {
    const { history } = renderWithRouterAndRedux(<App />)
    
    const email = screen.getByTestId('input-gravatar-email')
    const name = screen.getByTestId('input-player-name');
    const btnPlay = screen.getByTestId('btn-play');

    userEvent.type(email, 'teste@teste.com');
    userEvent.type(name, 'Romulo')
    userEvent.click(btnPlay);
    history.push('/feedback')

    console.log(history.location.pathname)
    const profilePicture = await screen.findByTestId('header-profile-picture')
    const profileName = await screen.findByTestId('header-player-name')
    const score = await screen.findByTestId('header-score')
    const feedbackText = await screen.findByTestId('feedback-text')
    const placarTotal = screen.getByText(/Placar total:/i)
    const totalQuestion = screen.getByText(/Acertou um total de/i)

    expect(profilePicture).toBeInTheDocument();
    expect(profileName).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(feedbackText).toBeInTheDocument();
    expect(placarTotal).toBeInTheDocument();
    expect(totalQuestion).toBeInTheDocument();
  })
  it('Verifica se ao clicar no botao Play Again, o usuario é mandado para pagina de login', async () => {
    const { history } = renderWithRouterAndRedux(<App />)
    
    const email = screen.getByTestId('input-gravatar-email')
    const name = screen.getByTestId('input-player-name');
    const btnPlay = screen.getByTestId('btn-play');

    userEvent.type(email, 'teste@teste.com');
    userEvent.type(name, 'Romulo')
    userEvent.click(btnPlay);
    history.push('/feedback')

    const playAgain = await screen.findByTestId('btn-play-again')
    const ranking = await screen.findByTestId('btn-ranking')

    expect(playAgain).toBeInTheDocument();
    expect(ranking).toBeInTheDocument();
    userEvent.click(playAgain);
    expect(history.location.pathname).toBe('/')
  })
  it('Verifica se ao clicar no botao Play Again, o usuario é mandado para pagina de ranking', async () => {
    const { history } = renderWithRouterAndRedux(<App />)
    
    const email = screen.getByTestId('input-gravatar-email')
    const name = screen.getByTestId('input-player-name');
    const btnPlay = screen.getByTestId('btn-play');

    userEvent.type(email, 'teste@teste.com');
    userEvent.type(name, 'Romulo')
    userEvent.click(btnPlay);
    history.push('/feedback')

    const ranking = await screen.findByTestId('btn-ranking')

    userEvent.click(ranking);
    expect(history.location.pathname).toBe('/ranking')
  })
})
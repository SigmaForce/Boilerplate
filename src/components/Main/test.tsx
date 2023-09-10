import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderizar o componente
    const { container } = render(<Main />)
    // buscar o elemento a partir do texto
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo)
    expect(container.firstChild).toMatchSnapshot()
  })
})

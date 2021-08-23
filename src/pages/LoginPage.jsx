import { Button } from '../components/Button';

export function LoginPage() {
  return (
    <main>
      <section>
        <form action="" onSubm>
          <h1>Informe seu usuário</h1>
          <input type="text" name="username"/>
          <Button type="submit">Entrar</Button>
        </form>
      </section>
    </main>
  )
}
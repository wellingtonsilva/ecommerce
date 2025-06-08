# Template E-commerce

Um projeto full-stack de e-commerce desenvolvido com Next.js 15, TypeScript, Prisma e Zustand.

## Tecnologias Utilizadas

- **Next.js 15**
- **TypeScript**
- **PostgreSQL**: Banco de dados
- **Prisma**: ORM para gerenciamento de banco de dados
- **Zustand**: Gerenciamento de estado global
- **Axios**
- **Tailwind CSS**
- **Shadcn/ui**

## Modelos de Dados

O projeto inclui os seguintes modelos no banco de dados:

- **Product**: Produtos disponíveis na loja
- **User**: Usuários registrados
- **Order**: Pedidos realizados

## Como Iniciar

   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` no projeto com:
   ```
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
   ```
4. Execute as migrations do Prisma:
   ```bash
   npx prisma migrate dev
   ```
5. Rodar o projeto:
   ```bash
   npm run dev
   ```
6. Acesse `http://localhost:3000`
# Design

## Context

Em `src/types` já existem `user.ts`, `tasks.ts` e `auth.ts`. `tasks.ts` tem `projectId` com um comentário "arrumar depois". `auth.ts` importa `User` mas ainda não tem um tipo de resposta de login. O back-end ainda não foi feito, então os tipos refletem o modelo desejado. Veja proposal.md para a motivação.

## Goals / Non-Goals

**Goals:**
- Tipos claros, sem lógica de runtime.
- Um único ponto de importação.
- Modelar a hierarquia: um grupo tem projetos, uma pessoa tem projetos e tarefas, e tarefas e projetos podem existir sem grupo.

**Non-Goals:**
- Validação em runtime (zod, etc.), chamadas de API, estado e componentes.

## Decisions

- **Hierarquia `Group` → `Project` → `Task`, com tudo opcional para cima**: `Project.groupId?` e `Task.projectId?`. Alternativa: `groupId` direto na tarefa, mas isso duplica a informação e permite estados contraditórios (tarefa em um grupo e projeto de outro).
- **`Project.ownerId` sempre presente**: identifica o dono de projetos pessoais e o criador de projetos de grupo.
- **Membros embutidos em `Group`** (`members: GroupMember[]` com `userId` e `role`): mantém a relação N:N simples e normalizada por id. Alternativa: embutir o `User` completo, o que duplica dados.
- **`GroupRole` separado de `UserRole`**: o papel no grupo é diferente do papel global na aplicação.
- **`type` para uniões e `interface` para objetos**: mantém o padrão já usado nos arquivos existentes.
- **Datas como `string` ISO**: segue o padrão atual de `Task.createdAt`.
- **`UpdateXDTO` como `Partial` dos campos editáveis**: evita repetir os campos à mão.
- **Barrel `index.ts`**: simplifica as importações.

## Risks / Trade-offs

- [Os campos podem não bater com o back-end] → Ajustar quando o contrato da API estiver definido.
- [Tarefa em grupo sem projeto não é possível] → Se o produto exigir isso, adicionar `groupId?` em `Task` numa mudança futura.

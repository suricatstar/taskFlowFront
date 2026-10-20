# Proposal

## Why

O TaskFlow ainda não tem um modelo de domínio tipado e consistente no front-end. Já existem `User`, `Task` e DTOs de auth em `src/types`, mas faltam os tipos de grupo e projeto, e `Task` usa `projectId` como marcador provisório. Definir os tipos primeiro dá uma base estável para as telas e para a integração com a API, que o back-end ainda vai definir.

## What Changes

- Revisar e consolidar os tipos `User`, `Task` e DTOs de auth já existentes.
- Criar o tipo `Group` (grupo de usuários), com membros e papel de cada membro.
- Criar o tipo `Project`, que pertence a um usuário (`ownerId`) e pode ou não pertencer a um grupo (`groupId` opcional).
- Manter `projectId` opcional em `Task`. A tarefa pode existir sem projeto e, portanto, sem grupo. O grupo da tarefa vem do projeto.
- Criar DTOs de criação e atualização de grupo, projeto e tarefa.
- Criar um `index.ts` em `src/types` que reexporta todos os tipos.
- Escopo apenas de tipagem: sem componentes, chamadas de API ou lógica.

## Capabilities

### New Capabilities
- `domain-types`: contratos TypeScript das entidades de usuário, tarefa, projeto e grupo, e dos DTOs de auth, tarefa, projeto e grupo.

### Modified Capabilities

## Impact

- Código afetado: `src/types/user.ts`, `src/types/tasks.ts`, `src/types/auth.ts`, novos `src/types/group.ts` e `src/types/project.ts`, e novo `src/types/index.ts`.
- Nenhuma dependência nova.
- Os campos podem mudar quando o contrato do back-end for definido.

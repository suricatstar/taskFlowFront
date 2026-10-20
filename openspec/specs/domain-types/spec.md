# domain-types Specification

## Purpose
Definir os contratos TypeScript das entidades de domínio do TaskFlow (usuário, tarefa, projeto e grupo) e dos DTOs de auth, tarefa, projeto e grupo, para que o front-end use uma tipagem única e consistente.

## Requirements

### Requirement: Tipo de usuário
O sistema SHALL expor o tipo `User` com `id`, `name`, `email` e `role`, e o tipo `UserRole` com os valores `ADMIN`, `USER` e `VIEWER`.

#### Scenario: Usuário válido
- **WHEN** um objeto é tipado como `User`
- **THEN** ele exige `id`, `name`, `email` e `role`
- **AND** `role` só aceita os valores de `UserRole`

### Requirement: Tipo de tarefa
O sistema SHALL expor o tipo `Task` e o tipo `TaskStatus` com os valores `PENDING`, `IN_PROGRESS` e `COMPLETED`. `Task` SHALL ter `id`, `title`, `status`, `createdAt` e `updatedAt` obrigatórios, e `description`, `createdBy`, `projectId` e `assignedTo` opcionais. `Task` SHALL NOT ter `groupId`.

#### Scenario: Tarefa avulsa
- **WHEN** uma tarefa não pertence a nenhum projeto
- **THEN** `projectId` é omitido
- **AND** a tarefa não pertence a nenhum grupo

#### Scenario: Tarefa de projeto
- **WHEN** uma tarefa pertence a um projeto
- **THEN** `projectId` guarda o `id` do projeto
- **AND** o grupo da tarefa é o grupo do projeto, se houver

### Requirement: Tipo de projeto
O sistema SHALL expor o tipo `Project` com `id`, `name`, `ownerId`, `createdAt` e `updatedAt` obrigatórios, e `description` e `groupId` opcionais. `ownerId` SHALL ser o `id` de um `User`.

#### Scenario: Projeto pessoal
- **WHEN** um projeto não pertence a um grupo
- **THEN** `groupId` é omitido
- **AND** `ownerId` identifica o usuário dono

#### Scenario: Projeto de grupo
- **WHEN** um projeto pertence a um grupo
- **THEN** `groupId` guarda o `id` do grupo
- **AND** um grupo pode ter vários projetos

### Requirement: Tipo de grupo
O sistema SHALL expor o tipo `Group` com `id`, `name`, `members`, `createdAt` e `updatedAt`, e `description` opcional. Cada item de `members` SHALL ser um `GroupMember` com `userId` e `role`. `GroupRole` SHALL aceitar `OWNER`, `ADMIN` e `MEMBER`.

#### Scenario: Grupo com membros
- **WHEN** um objeto é tipado como `Group`
- **THEN** `members` é uma lista de `GroupMember`
- **AND** cada membro tem um `userId` e um `GroupRole`

### Requirement: DTOs de entrada
O sistema SHALL expor `LoginDTO`, `RegisterDTO`, `CreateTaskDTO`, `UpdateTaskDTO`, `CreateProjectDTO`, `UpdateProjectDTO`, `CreateGroupDTO` e `UpdateGroupDTO`. Os DTOs de atualização SHALL ter todos os campos opcionais.

#### Scenario: Atualização parcial de tarefa
- **WHEN** um objeto é tipado como `UpdateTaskDTO`
- **THEN** ele pode conter apenas alguns campos editáveis da tarefa

### Requirement: Ponto único de importação
O sistema SHALL reexportar todos os tipos de domínio em `src/types/index.ts`.

#### Scenario: Importação centralizada
- **WHEN** um módulo importa de `src/types`
- **THEN** ele acessa `User`, `Task`, `Project`, `Group` e todos os DTOs sem apontar para arquivos individuais

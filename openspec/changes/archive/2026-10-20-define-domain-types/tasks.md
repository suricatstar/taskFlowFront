# Tasks

## 1. Tipos de usuário e auth

- [x] 1.1 Revisar `src/types/user.ts` (`User`, `UserRole`) conforme a spec e verificar com `npx tsc --noEmit`
- [x] 1.2 Revisar `src/types/auth.ts` (`LoginDTO`, `RegisterDTO`) e verificar com `npx tsc --noEmit`

## 2. Tipos de grupo

- [x] 2.1 Criar `src/types/group.ts` com `GroupRole`, `GroupMember`, `Group`, `CreateGroupDTO` e `UpdateGroupDTO`, e verificar com `npx tsc --noEmit`

## 3. Tipos de projeto

- [x] 3.1 Criar `src/types/project.ts` com `Project` (`ownerId` obrigatório, `groupId` opcional), `CreateProjectDTO` e `UpdateProjectDTO`, e verificar com `npx tsc --noEmit`

## 4. Tipos de tarefa

- [x] 4.1 Em `src/types/tasks.ts`, manter `projectId` opcional em `Task` e `CreateTaskDTO`, remover os comentários provisórios e confirmar que não existe `groupId` em `Task`
- [x] 4.2 Adicionar `UpdateTaskDTO` (campos editáveis opcionais) e verificar com `npx tsc --noEmit`

## 5. Ponto único de importação

- [x] 5.1 Criar `src/types/index.ts` reexportando `user`, `auth`, `tasks`, `project` e `group`, e verificar com `npx tsc --noEmit`, importando `Task`, `Project` e `Group` de `src/types`

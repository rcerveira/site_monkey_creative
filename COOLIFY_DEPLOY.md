# Deploy no Coolify - Instruções

## Pré-requisitos

- Coolify instalado e configurado
- Git sincronizado com seu repositório

## Configuração no Coolify

### 1. Criar Nova Aplicação
- Clique em "Create Application"
- Selecione seu repositório Git
- Branch: `main` (ou sua branch principal)

### 2. Configurações da Build
A build é automáticamente detectada via `nixpacks.toml`:

**Build Command:** (automático)
```
npm run build
```

**Start Command:** (automático)
```
serve -s dist -l ${PORT:-3000} --no-clipboard --single
```

### 3. Variáveis de Ambiente

Se está usando APIs (ex: Gemini), configure:

```
GEMINI_API_KEY=sua_chave_aqui
```

### 4. Port Mapping

- **Porta Interna:** 3000 (ou a que você definir)
- **Porta Externa:** Use a padrão do Coolify ou customize

### 5. Domínio/SSL

1. Adicione seu domínio nas configurações da app
2. Ative SSL/TLS automático via Let's Encrypt

## Troubleshooting

### Erro: "nodejs_24 not found"
- Atualize o Coolify para a versão mais recente
- Ou reduza para `nodejs_22` em `nixpacks.toml`

### Erro: "serve: command not found"
- Verifique se `serve` está no `dependencies` do `package.json`
- Execute `npm install` manualmente se necessário

### Página carrega lentamente
- Verifique o tamanho do bundle em `dist/` (deve ser ~70KB gzipped)
- Ative compressão GZIP nas configurações do Coolify
- Verifique recursos de rede vs. performance do servidor

### Arquivo CSS/JS não carregas
- Verifique as permissões da pasta `dist/`
- Confirme que `Content-Type` headers estão corretos no servidor

## Performance em Produção

O projeto foi otimizado para:
- ✅ Lazy loading de componentes (abaixo da dobra)
- ✅ Bundle splitting por componente
- ✅ Tailwind CSS pré-compilado
- ✅ Animações desabilitadas em mobile
- ✅ Lazy loading de imagens

## Monitoramento

Após deploy, monitore:
1. **Logs da aplicação** - Verifique erros de runtime
2. **Uso de memória** - Serve é leve, deve usar <50MB
3. **Velocidade de resposta** - Deve ser <100ms em conexão local

## Atualizações Futuras

Para atualizar o projeto:

1. Push para Git
2. Coolify detecta automaticamente
3. Nova build iniciada
4. Sem downtime com zero-downtime deployment

---

**Última atualização:** 10 de fevereiro de 2026

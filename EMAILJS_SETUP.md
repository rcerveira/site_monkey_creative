# Configuração do EmailJS

## 📧 Como Configurar o Formulário de Contato

O formulário de contato usa o **EmailJS** para enviar emails sem precisar de um servidor backend.

### Passo 1: Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em **"Sign Up"** e crie uma conta gratuita
3. Confirme seu email

**Plano Gratuito:** 200 emails por mês (suficiente para a maioria dos sites)

---

### Passo 2: Adicionar Serviço de Email

1. No dashboard do EmailJS, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email:
   - **Gmail** (recomendado)
   - Outlook
   - Yahoo
   - Outros
4. Conecte sua conta de email
5. Copie o **Service ID** que será gerado

---

### Passo 3: Criar Template de Email

1. No dashboard, vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template com o seguinte conteúdo:

**Subject (Assunto):**
```
Novo Contato: {{service_type}} - {{from_name}}
```

**Body (Corpo do Email):**
```
Você recebeu uma nova mensagem através do formulário de contato!

Nome: {{from_name}}
Email: {{from_email}}
Serviço: {{service_type}}

Mensagem:
{{message}}

---
Enviado através do formulário de contato do site Monkey Creative
```

4. Salve o template e copie o **Template ID**

---

### Passo 4: Obter a Public Key

1. No dashboard, vá em **"Account"** → **"General"**
2. Na seção **"API Keys"**, copie a **Public Key**

---

### Passo 5: Configurar as Variáveis de Ambiente

1. Crie um arquivo `.env.local` na raiz do projeto (ou renomeie o `.env.example`)
2. Adicione suas credenciais:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

3. **IMPORTANTE:** Nunca commite o arquivo `.env.local` no Git! Ele já está no `.gitignore`

---

### Passo 6: Testar Localmente

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Acesse o formulário de contato
3. Preencha e envie uma mensagem de teste
4. Verifique se o email chegou na caixa de entrada configurada

---

### Passo 7: Deploy em Produção

#### Para Vercel:
1. Acesse o dashboard do Vercel
2. Vá em **Settings** → **Environment Variables**
3. Adicione as 3 variáveis:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Faça redeploy do projeto

#### Para Coolify:
1. Acesse o dashboard do Coolify
2. Vá em **Environment Variables**
3. Adicione as 3 variáveis com os valores corretos
4. Faça redeploy

---

## 🎨 Personalização do Template

Você pode personalizar o template de email no EmailJS com:

- **Variáveis disponíveis:**
  - `{{from_name}}` - Nome do contato
  - `{{from_email}}` - Email do contato
  - `{{service_type}}` - Tipo de serviço selecionado
  - `{{message}}` - Mensagem enviada

- **HTML personalizado** para emails mais bonitos
- **Auto-resposta** para o cliente (criar segundo template)
- **Múltiplos destinatários** (adicionar CC/BCC)

---

## 🔒 Segurança

✅ **Seguro:** A Public Key pode ser exposta no frontend
✅ **Limite de emails:** Plano gratuito tem 200 emails/mês
✅ **Proteção anti-spam:** EmailJS tem validações internas
✅ **Cloudflare Turnstile:** Captcha integrado para proteção extra

---

## 🛡️ Configurar Cloudflare Turnstile (Captcha)

O formulário já está integrado com o Cloudflare Turnstile para proteção contra bots.

### Passo 1: Criar Site no Turnstile

1. Acesse [Cloudflare Turnstile Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
2. Clique em **"Add Site"**
3. Preencha:
   - **Site name:** Monkey Creative (ou qualquer nome)
   - **Domain:** Seu domínio (ex: `mnkcreative.com`)
     - Para testes locais, adicione também `localhost`
   - **Widget Mode:** Managed (recomendado)
4. Clique em **"Create"**
5. Copie a **Site Key** (chave pública)

### Passo 2: Adicionar ao .env.local

```env
VITE_TURNSTILE_SITE_KEY=0x4AAAAAAxxxxxxxxxxxxx
```

### Passo 3: Deploy em Produção

**Vercel:**
- Adicione `VITE_TURNSTILE_SITE_KEY` nas Environment Variables

**Coolify:**
- Adicione `VITE_TURNSTILE_SITE_KEY` nas Environment Variables

### Modo de Teste

O Turnstile tem uma chave especial para testes que sempre passa:
```
1x00000000000000000000AA - Sempre aprova
2x00000000000000000000AB - Sempre falha
3x00000000000000000000FF - Força modo interativo
```

Use `1x00000000000000000000AA` no `.env.local` se quiser testar sem criar conta no Cloudflare.

---

## 🐛 Troubleshooting

### Email não está chegando
- Verifique se as credenciais estão corretas
- Confirme que o serviço de email está conectado
- Verifique a pasta de spam
- Veja os logs no dashboard do EmailJS

### Erro "Failed to send email"
- Verifique se as variáveis de ambiente estão definidas
- Confirme que o template usa as variáveis corretas: `{{from_name}}`, `{{from_email}}`, `{{service_type}}`, `{{message}}`
- Verifique o console do navegador para mais detalhes

### Limite de emails excedido
- Plano gratuito: 200 emails/mês
- Considere fazer upgrade para plano pago se necessário
- Ou use múltiplas contas para diferentes projetos

---

## 📝 Estrutura do Código

O formulário está implementado em [`components/Contact.tsx`](components/Contact.tsx):

- **Estados:** `idle`, `submitting`, `success`, `error`
- **Validação:** Campos obrigatórios (nome, email, mensagem)
- **Feedback visual:** Animações de sucesso/erro
- **Reset automático:** Limpa o formulário após envio bem-sucedido

---

## 📚 Documentação Oficial

- [EmailJS Docs](https://www.emailjs.com/docs/)
- [React Integration](https://www.emailjs.com/docs/examples/reactjs/)
- [API Reference](https://www.emailjs.com/docs/sdk/send/)

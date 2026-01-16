# ⏰ Relógio Digital 1.0

Um relógio digital moderno e interativo desenvolvido com HTML, CSS e JavaScript. Exibe a hora atual em tempo real com a possibilidade de customizar a aparência através de controles intuitivos.

## 🎯 Funcionalidades

- **Exibição em Tempo Real**: Mostra horas, minutos e segundos atualizados continuamente
- **Seletor de Cores**: Altere a cor de fundo da página com um seletor de cores integrado
- **Controle de Opacidade**: Ajuste a transparência da página com um controle deslizante
- **Design Responsivo**: Interface elegante com fundo preto e texto em branco
- **Layout Centrado**: Relógio posicionado no centro da tela com bordas arredondadas e sombra

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização moderna com Flexbox e efeitos de sombra
- **JavaScript**: Lógica de atualização do relógio em tempo real

## 📋 Estrutura do Projeto

```
Relogio digital_1.0/
├── index.html      # Arquivo HTML principal
├── styles.css      # Estilos CSS
├── script.js       # Lógica JavaScript
└── README.md       # Este arquivo
```

## 🚀 Como Usar

1. **Abra o arquivo `index.html` em um navegador web**
   - O relógio iniciará automaticamente e começará a exibir a hora atual

2. **Personalize a Aparência**:
   - Clique no seletor de cores para mudar a cor de fundo
   - Use o controle deslizante para ajustar a opacidade (transparência) da página

3. **Observar o Relógio**:
   - As horas, minutos e segundos são atualizados a cada segundo
   - O formato é HH:MM:SS com valores preenchidos com zero quando necessário

## 💡 Como Funciona

### JavaScript (`script.js`)
- A função `time()` é executada continuamente a cada segundo usando `setInterval()`
- Obtém a data/hora atual com `new Date()`
- Extrai horas, minutos e segundos
- Adiciona zero à esquerda se o valor for menor que 10
- Atualiza o conteúdo dos elementos HTML

### Controles Interativos
- **Color Picker**: Altera `backgroundColor` do body
- **Range Slider**: Altera `opacity` do body de 0 a 1

## 🎨 Características de Design

- **Cores**: Fundo preto com texto branco para alto contraste
- **Fonte**: Gill Sans MT com tamanho grande para legibilidade
- **Efeitos**: Sombra brilhante ao redor do relógio
- **Responsividade**: Usa Flexbox para centralização e layout fluido

## 📝 Exemplo de Uso

Simplesmente abra `index.html` no seu navegador favorito e o relógio começará a funcionar imediatamente, exibindo a hora atual do seu sistema.

## 🔧 Requisitos

- Um navegador moderno com suporte a HTML5, CSS3 e JavaScript ES6
- Nenhuma dependência externa ou instalação necessária

## 📄 Licença

Projeto de código aberto. Sinta-se livre para usar, modificar e distribuir conforme necessário.

---

**Versão**: 1.0  
**Última Atualização**: 16 de janeiro de 2026

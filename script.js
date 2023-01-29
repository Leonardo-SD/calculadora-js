function calculadora() {
    const display = document.querySelector('.display');
    let novoNumero = true;

    teclaClicada();
    botaoClicado();

    function botaoClicado() {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) inserirNumero(el.textContent);
            if (el.classList.contains('btn-del')) apagarUm();
            if (el.classList.contains('btn-clear')) limparDisplay();
            if (el.classList.contains('btn-eq')) realizaConta();
        })
    }

    function teclaClicada() {
        document.addEventListener('keyup', e => {
            const tecla = e.key;
            if (tecla == 0) inserirNumero(tecla);
            if (tecla == 1) inserirNumero(tecla);
            if (tecla == 2) inserirNumero(tecla);
            if (tecla == 3) inserirNumero(tecla);
            if (tecla == 4) inserirNumero(tecla);
            if (tecla == 5) inserirNumero(tecla);
            if (tecla == 6) inserirNumero(tecla);
            if (tecla == 7) inserirNumero(tecla);
            if (tecla == 8) inserirNumero(tecla);
            if (tecla == 9) inserirNumero(tecla);
            if (tecla == '+') inserirNumero(tecla);
            if (tecla == '*') inserirNumero(tecla);
            if (tecla == '/') inserirNumero(tecla);
            if (tecla == '-') inserirNumero(tecla);
            if (tecla == '.') inserirNumero(tecla);
            if (tecla == 'Enter') realizaConta();
            if (tecla == '(') inserirNumero(tecla);
            if (tecla == ')') inserirNumero(tecla);
            if (tecla == 'c') limparDisplay();
            if (tecla == 'Escape') limparDisplay();
            if (tecla == '=') realizaConta();
            if (tecla == 'Backspace') apagarUm();
        })
    }

    function inserirNumero(valor) {
        if (novoNumero) {
            display.textContent = valor.toLocaleString('BR');
            novoNumero = false;
        } else {
            display.textContent += valor.toLocaleString('BR');
        }
    }

    const limparDisplay = () => display.textContent = '';
    const apagarUm = () => display.textContent = display.textContent.slice(0, -1);

    const realizaConta = () => {
        let conta = display.textContent;

        try {
            conta = eval(conta);
            display.textContent = String(conta);
        } catch (e) {
            alert('Cnta inválida.')
            return;
        }
    }
}

calculadora();
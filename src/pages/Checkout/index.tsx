export function Checkout() {
  return (
    <div>
      <div>
        <h1>Complete seu pedido</h1>
        <div className="Form"></div>
        <div className="PaymentType"></div>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <div className="SelectedItems">
          <div className="SelectedItem">
            <div>logo</div>
            <div>
              <div>
                <p>nome do cafe</p>
                <p>preço do café</p>
              </div>
              <div>
                <div className="itemCounter"></div>
                <div className="removerButton"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>Total de itens</p>
            <p>preço sem frete</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>preço entrega</p>
          </div>
          <div>
            <p>Total</p>
            <p>preço total</p>
          </div>
          <button>Confirmar Pedido</button>
        </div>
      </div>
    </div>
  );
}

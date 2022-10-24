

const Payment = ({className, invoice, price, name}) => {

    var handler = window.ePayco.checkout.configure({
        key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
        test: true
      });

      const handleClick = () => {
        handler.open({
          //Parametros compra (obligatorio)
          name: name,
          description: name,
          invoice: invoice,
          currency: "cop",
          amount: price,
          tax_base: "0",
          tax: "0",
          country: "co",
          lang: "en",
    
          //Onpage="false" - Standard="true"
          external: "false",
    
    
          //Atributos opcionales
          extra1: "extra1",
          extra2: "extra2",
          extra3: "extra3",
          response: "http://localhost:3000/",
    
          //Atributos cliente
          name_billing: localStorage.getItem('email'),
          address_billing: localStorage.getItem('email'),
          type_doc_billing: "cc",
          mobilephone_billing: "3101234567",
          number_doc_billing: "1234567896",
    
          //atributo deshabilitación metodo de pago
          methodsDisable: ["SP"]
    
        })
      }
    
  return (
    <div className="reserve">
      
      <button type="submit" className={className} onClick={handleClick}>
      <span className="reserveIt">Reservar</span>
      </button>
      
    </div>
    
  )
}

export default Payment
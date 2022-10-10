

const Payment = () => {

    var handler = window.ePayco.checkout.configure({
        key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
        test: true
      });

      const handleClick = () => {
        handler.open({
          //Parametros compra (obligatorio)
          name: "Casa",
          description: "casa en el centro de bogota",
          invoice: "001",
          currency: "cop",
          amount: "100000",
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
          name_billing: "Jhon vasquez",
          address_billing: "Cra 70c",
          type_doc_billing: "cc",
          mobilephone_billing: "3101234567",
          number_doc_billing: "1234567896",
    
          //atributo deshabilitación metodo de pago
          methodsDisable: ["SP"]
    
        })
      }
    
  return (
    <div className="App">
      
      <button onClick={handleClick}>Pagar</button>
      
    </div>
    
  )
}

export default Payment


export default function BarcodeComponent() {
  return (
    <div className="flex justify-center">
      <Barcode 
        value="https://fakestoreapi.com/order/12345" 
        width={2}
        height={100}
        displayValue={true}
      />
    </div>
  );
}
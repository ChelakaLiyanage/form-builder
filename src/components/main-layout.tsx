export function MainLayout(){
    return(<div className="h-screen w-screen flex bg-border p-2 gap-2">
    <div className="w-80 bg-card rounded-lg">sidebar</div>
    <div className="flex-grow bg-card rounded-lg">form-preview</div>
  </div>);
}
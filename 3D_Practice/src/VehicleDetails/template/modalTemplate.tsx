import { Modal } from 'antd';

interface Props {
    title?: string;
    isOpen?:boolean;
    handleOk?:()=>void;
    handleCancel?:()=>void;
    description?: string;
    showCancelBtn?:boolean;
    showOkBtn?:boolean;
    position?:string;
    cancelText?:string;
    okText?:string;
}

const ModalTemplate = ({
  title,
  isOpen,
  handleOk,
  handleCancel,
  description,
  cancelText,
  okText,
}:Props) => {

  return (
    <>
      <Modal okText={okText} cancelText={cancelText} centered title={title} open={isOpen} onOk={handleOk} onCancel={handleCancel}>
       {
        description
       }
      </Modal>
    </>
  );
};
export default ModalTemplate;
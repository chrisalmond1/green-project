const OnsListItem = (props) => {
  return (
    <ons-list-item
      modifier="material nodivider"
      className="list-item list-item--material list-item--nodivider"
    >
      <div className="left list-item__left list-item--material__left list-item--nodivider__left">
        <ons-icon
          class="list-item__icon ons-icon zmdi zmdi-account-box-mail list-item--nodivider__icon list-item--material__icon"
          data-v-e670b180=""
          icon="md-account-box-mail"
        ></ons-icon>
      </div>
      <label className="center list-item__center list-item--material__center ">
        <ons-input
          placeholder={props.placeholder}
          modifier="material"
          name={props.name}
          type={props.type}
          id={props.name}
        />
      </label>
    </ons-list-item>
  );
};

export default OnsListItem;

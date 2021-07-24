import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import { getData, postData, deleteDataAxios } from "../../FetchServices";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  input: {
    display: "none",
  },
  cont: {
    marginTop: "30px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  TextField: {
    padding: "5px",
    margin: "10px",
  },
}));
export default function DisplayUser(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    columns: [
      { title: "ID", field: "iduserdata" },
      { title: "Name", field: "name" },
      { title: "Email ", field: "email" },
      { title: "Contact No ", field: "phone" },
    ],
  });
  const [getList, setList] = useState([]);

  const fetchData = async () => {
    let list = await getData("info/Displayall");
    setList(list);
  };

  useEffect(() => {
    fetchData();
    fetchPackage();
  }, []);

  const handleDelete = async (oldData) => {
    let body = oldData.iduserdata;
    console.log("body");

    await deleteDataAxios(`info/deleteuser/${body}`);
  };
  /*---------Dailog-------- */
  const [open, setOpen] = React.useState(false);
  const [getMsg, setMsg] = useState("");
  const [getPackageid, setPackageid] = useState("");
  const [getPtime, setPtime] = useState("");
  const [getPdistance, setPdistance] = useState("");
  const [getPackageiderr, setPackageiderr] = useState("");
  const [getPtimeerr, setPtimeerr] = useState("");
  const [getPdistanceerr, setPdistanceerr] = useState("");
  const [getfeatureid, setfeatureid] = useState("");

  const [getListPack, setListPack] = useState([]);

  /*---------fetch package data-------- */
  const fetchPackage = async () => {
    // let list=await getData('Packages/displayall')
    // setListPack(list)
  };
  const fillpackage = () => {
    return getListPack.map((item, key) => {
      return <MenuItem value={item.packageid}>{item.packagename}</MenuItem>;
    });
  };
  const handlePackageChange = (event) => {
    setPackageid(event.target.value);
  };

  const ClearData = () => {
    setPackageid("");
    setPtime("");
    setPdistance("");
    setMsg("");
    setPackageiderr("");
    setPtimeerr("");
    setPdistanceerr("");
  };

  const handleClickOpen = (rowData) => {
    props.history.push({ pathname: `/Editpage`, data: rowData });
    setOpen(true);
    setPackageid(rowData.packageid);
    setPtime(rowData.packagetime);
    setPdistance(rowData.packagedistance);
    setfeatureid(rowData.featureid);
  };
  const handleClose = () => {
    setOpen(false);
    fetchData();
  };
  return (
    <div>
      <MaterialTable
        title="Display User Table"
        columns={state.columns}
        data={getList}
        actions={[
          {
            icon: "edit",
            tooltip: "Edit",
            onClick: (event, rowData) => handleClickOpen(rowData),
          },
        ]}
        editable={{
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                const data = [...getList];
                data.splice(data.indexOf(oldData), 1);
                setList(data);
                handleDelete(oldData);
              }, 600);
            }),
        }}
      />
    </div>
  );
}

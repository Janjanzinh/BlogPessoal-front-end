import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import Postagem from "../../../model/Postagem";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { buscaId, deleteId, post } from "../../../service/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function DeletarPostagens() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) =>state.tokens
  );
  const [postagens, setPostagens] = useState<Postagem>();

  useEffect(() => {
    if (token == "") {
      toast.error('Voce precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPostagens, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate("/postagens");
    deleteId(`/postagens/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    toast.success('Postagem deletada com sucesso', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
  }

  function nao() {
    navigate("/postagens");
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary">{postagens?.titulo}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  onClick={sim}
                  variant="contained"
                  className="marginLeft"
                  size="large"
                  color="primary"
                >
                  Sim
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={nao}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagens;